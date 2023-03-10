import { useRouter } from "next/router";
import { useState } from "react";

import { Text, Button, Rating, Textarea, Required } from "@/components";
import { SeatSelect } from "./SeatSelect";
import { ImagePreview } from "./ImagePreview";
import { ImageUploadButton } from "./ImageUploadButton";
import { ConfirmModal } from "./ConfirmModal";
import { useImageList } from "../../hooks/useImageList";

type ReviewFormProps<T extends React.ElementType> = Component<T> & {
  data?: ReviewDetail;
  onMutate: ({
    theaterId,
    reviewId,
    payload,
  }: {
    theaterId: string;
    reviewId: string;
    payload: FormData;
  }) => void;
};

export function ReviewForm({
  data,
  onMutate,
  children,
  ...props
}: ReviewFormProps<"form">) {
  const {
    query: { theater, reviewId, ...seatInfo },
  } = useRouter();

  const {
    floor,
    section,
    seatRow,
    seatNumber,
    rating: _rating,
    content,
    images,
  } = data ?? {};

  const isEditMode = !!data;

  const [seat, setSeat] = useState<Seat>({
    floor: floor ? floor : seatInfo.floor ? +(seatInfo.floor as string) : 1,
    section: section ? section : (seatInfo.section as string) ?? "OP",
    seatRow: seatRow
      ? seatRow
      : seatInfo.seatRow
      ? +(seatInfo.seatRow as string)
      : 1,
    seatNumber: seatNumber
      ? seatNumber
      : seatInfo.seatNumber
      ? +(seatInfo.seatNumber as string)
      : 1,
  });
  const [rating, setRating] = useState(_rating ?? 0);
  const [detailReview, setDetailReview] = useState(content ?? "");
  const [showModal, setShowModal] = useState(false);

  const { imageList, deletedImageList, onImageListChange, onImageDelete } =
    useImageList({
      initialImageList: images?.map((image) => ({
        id: Symbol(),
        imagePreviewUrl: image,
      })),
    });

  const handleRatingChange = (newRating: number) => {
    setRating(newRating as Rating);
  };

  const handleFormSubmit = () => {
    const { floor, section, seatRow, seatNumber } = seat;
    const data = {
      floor,
      section,
      seatRow,
      seatNumber,
      rating,
      content: detailReview,
    };

    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    imageList.forEach(({ file }) => {
      file && formData.append("image", file);
    });
    deletedImageList.forEach((image) => {
      formData.append("deleteImages", image);
    });

    onMutate({
      theaterId: theater as string,
      reviewId: reviewId as string,
      payload: formData,
    });
  };

  const isValidForm = !!detailReview && rating > 0;

  return (
    <form className="flex flex-col gap-3" {...props}>
      <Text as="h5" className="font-semibold">
        ????????? ?????? ???????????? <Required />
      </Text>
      <SeatSelect disabled={isEditMode} seat={seat as Seat} setSeat={setSeat} />

      <Text as="h5" className="font-semibold">
        ????????? ???????????????? <Required />
      </Text>
      <Rating
        value={rating}
        onRatingChange={handleRatingChange}
        className="mb-4"
      />

      <Text as="h5" className="font-semibold">
        ????????? ????????? ??????????????? <Required />
      </Text>
      <Text className="text-semibold text-gray-500 dark:text-gray-300">
        ?????? ????????? 1~200?????? ??????????????????.
      </Text>
      <Textarea
        required
        value={detailReview}
        onChange={(e) => setDetailReview(e.target.value)}
        placeholder={`
        1. ????????? ?????????????
        2. ????????? ?????????????
        3. ????????? ?????????????`}
        cols={30}
        rows={10}
        maxLength={200}
        className="mb-4"
      />

      <Text as="h5" className="font-semibold">
        ?????? ????????? ??????????????????
      </Text>
      <div className="flex flex-wrap gap-5">
        <ImageUploadButton onChange={onImageListChange} />
        {imageList.map((image) => (
          <ImagePreview
            key={image.imagePreviewUrl}
            imagePreviewUrl={image.imagePreviewUrl}
            onDelete={() => onImageDelete(image.id)}
          />
        ))}
      </div>
      <Button
        type="button"
        onClick={() => setShowModal(true)}
        disabled={!isValidForm}
      >
        {isValidForm ? "?????? ????????????" : "?????? ????????? ???????????????"}
      </Button>
      <ConfirmModal
        showModal={showModal}
        setShowModal={setShowModal}
        seat={seat as Seat}
        SubmitButton={
          <Button onClick={handleFormSubmit} className="w-full">
            ?????? ????????????
          </Button>
        }
      />
    </form>
  );
}
