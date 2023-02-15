import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { Text, Button, Rating, Textarea } from "@/components";
import { SeatSelect } from "./SeatSelect";
import { ImagePreview } from "./ImagePreview";
import { ImageUploadButton } from "./ImageUploadButton";
import { useCreateReviewMutation } from "../../hooks/query";

type ImageFiles = {
  file: Blob;
  imagePreviewUrl: string;
}[];

type ReviewFormProps<T extends React.ElementType> = Component<T> & {
  value?: number;
};

export function ReviewForm({ children, ...props }: ReviewFormProps<"form">) {
  const {
    query: { theater },
  } = useRouter();

  const detailReviewRef = useRef<HTMLTextAreaElement>(null);
  const [seat, setSeat] = useState({
    floor: "1",
    section: "OP",
    seatRow: "1",
    seatNumber: "1",
  });
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<ImageFiles>([]);

  const { mutate: createReview } = useCreateReviewMutation();

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    const newImages = Array.from(e.target.files as ArrayLike<File>).map(
      (file) => ({
        file,
        imagePreviewUrl: URL.createObjectURL(file),
      })
    );

    setImages([...images, ...newImages]);
  };

  const handleImageDeleteButton = (id: number) => {
    const newImages = images.filter((_, index) => index !== id);
    setImages(newImages);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { floor, section, seatRow, seatNumber } = seat;
    const data = {
      floor,
      section,
      seatRow,
      seatNumber,
      rating,
      content: detailReviewRef.current?.value,
    };

    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    images.forEach(({ file }) => {
      formData.append("image", file);
    });

    if (theater) {
      createReview({ theaterId: theater, payload: formData });
    }
  };

  return (
    <form
      className="flex flex-col gap-2"
      {...props}
      onSubmit={handleFormSubmit}
    >
      <Text as="h5" className="font-semibold">
        앉았던 자리 선택하기
      </Text>
      <SeatSelect seat={seat} setSeat={setSeat} />

      <Text as="h5" className="font-semibold">
        자리가 어떠셨나요?
      </Text>
      <Rating
        value={rating}
        onRatingChange={handleRatingChange}
        className="mb-4"
      />

      <Text as="h5" className="font-semibold">
        자세한 후기를 알려주세요
      </Text>
      <Textarea
        required
        ref={detailReviewRef}
        placeholder={`
        1. 시야는 어땠나요?
        2. 음향은 어땠나요?
        3. 단차는 어땠나요?`}
        cols={30}
        rows={10}
        className="mb-4"
      />

      <Text as="h5" className="font-semibold">
        시야 사진을 등록해주세요
      </Text>
      <div className="flex flex-wrap gap-5">
        <ImageUploadButton onChange={handleFileChange} />
        {images.map(({ imagePreviewUrl }, id) => (
          <ImagePreview
            key={imagePreviewUrl}
            imagePreviewUrl={imagePreviewUrl}
            onDeleteClick={() => handleImageDeleteButton(id)}
          />
        ))}
      </div>

      <Button>후기 공유하기</Button>
    </form>
  );
}
