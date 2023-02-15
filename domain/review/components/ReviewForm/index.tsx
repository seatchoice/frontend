import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { Text, Button, Rating, Textarea, Icon, Select } from "@/components";
import { SEATS } from "@/constants";
import { getSections, getRows, getSeatNumbers } from "../../utils";
import { useCreateReviewMutation } from "../../hooks/query";

type ImageFiles = {
  file: Blob;
  previewUrl: string;
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

  const seatInfo: Array<{
    id: "floor" | "section" | "seatRow" | "seatNumber";
    title: string;
    options: Array<{ value: string }>;
  }> = [
    {
      id: "floor",
      title: "층",
      options: Object.keys(SEATS).map((floor) => ({ value: floor })),
    },
    {
      id: "section",
      title: "구역",
      options: getSections(seat.floor).map((section) => ({ value: section })),
    },
    {
      id: "seatRow",
      title: "열",
      options: getRows(seat.floor, seat.section).map((row) => ({
        value: row,
      })),
    },
    {
      id: "seatNumber",
      title: "번호",
      options: getSeatNumbers(seat.floor, seat.section, seat.seatRow).map(
        (seatNumber) => ({ value: seatNumber })
      ),
    },
  ];

  const { mutate: createReview } = useCreateReviewMutation();

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: keyof typeof seat
  ) => {
    const { floor, section, seatRow } = { ...seat, [id]: e.target.value };
    const newSection = id === "floor" ? getSections(floor)[0] : section;
    const newSeatRow =
      id !== "seatNumber" ? getRows(floor, newSection)[0] : seatRow;
    const [newSeatNumber] = getSeatNumbers(floor, newSection, newSeatRow);

    setSeat({
      ...seat,
      section: newSection,
      seatRow: newSeatRow,
      seatNumber: newSeatNumber,
      [id]: e.target.value,
    });
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    const newImages = Array.from(e.target.files as ArrayLike<File>).map(
      (file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
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
      <section className="flex items-center gap-2 mb-4">
        {seatInfo.map(({ id, title, options }, index) => (
          <>
            <Select
              id={id}
              options={options}
              className="max-w-[4rem] text-center"
              onChange={(e) => handleSelectChange(e, id)}
              value={seat[id]}
            />
            <label htmlFor={id}>{title}</label>
          </>
        ))}
      </section>
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
      <ul className="flex flex-wrap gap-5">
        <label
          htmlFor="imageFile"
          className="flex flex-col items-center justify-center h-40 w-40 p-4 rounded-lg bg-light-fg dark:bg-dark-fg cursor-pointer"
        >
          <Icon as="camera" size={40} className="fill-primary-500" />
          <Text>사진 등록하기</Text>
        </label>
        <input
          type="file"
          id="imageFile"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
        {images.map(({ file: { name }, previewUrl }, id) => (
          <li
            key={name}
            className="relative inline-block max-w-[150px] rounded-lg"
          >
            <img
              src={previewUrl}
              alt="업로드된 이미지"
              className="h-40 w-40 rounded-lg"
            />
            <Button
              as="icon"
              className="absolute top-1 right-1 rounded-full bg-primary-500"
              onClick={() => handleImageDeleteButton(id)}
            >
              <Icon as="close" size={20} />
            </Button>
            <Text className="truncate">{name}</Text>
          </li>
        ))}
      </ul>

      <Button>후기 공유하기</Button>
    </form>
  );
}
