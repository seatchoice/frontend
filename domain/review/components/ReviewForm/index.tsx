import { useRef, useState } from "react";

import { Text, Button, Rating, Textarea, Icon, Select } from "@/components";

type ImageFiles = {
  file: Blob;
  previewUrl: string;
}[];

const seatInfo = [
  {
    id: "floor",
    title: "층",
    options: [{ value: "1" }, { value: "2" }],
  },
  {
    id: "section",
    title: "구역",
    options: [{ value: "1" }, { value: "2" }],
  },
  {
    id: "row",
    title: "열",
    options: [{ value: "1" }, { value: "2" }],
  },
  {
    id: "seat",
    title: "번호",
    options: [{ value: "1" }, { value: "2" }],
  },
];

type ReviewFormProps<T extends React.ElementType> = Component<T> & {
  value?: number;
};

export function ReviewForm({ children, ...props }: ReviewFormProps<"form">) {
  const seatsRef = [
    useRef<HTMLSelectElement>(null),
    useRef<HTMLSelectElement>(null),
    useRef<HTMLSelectElement>(null),
    useRef<HTMLSelectElement>(null),
  ];
  const detailReviewRef = useRef<HTMLTextAreaElement>(null);
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<ImageFiles>([]);

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

    const [floor, section, row, seatNumber] = seatsRef.map(
      ({ current }) => current?.value
    );

    const data = {
      floor,
      section,
      row,
      seatNumber,
      rating,
      content: detailReviewRef.current?.value,
    };

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, `${value}`)
    );
    images.forEach(({ file }) => {
      formData.append("image", file);
    });
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
              ref={seatsRef[index]}
              id={id}
              options={options}
              className="max-w-[4rem] text-center"
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

      <label
        htmlFor="imageFile"
        className="flex items-center p-4 mb-4 border-dashed border-2 border-gray-500 text-gray-500 rounded-lg"
      >
        <Icon as="camera" size={40} />
        <Text>사진 첨부하기</Text>
      </label>
      <input
        type="file"
        id="imageFile"
        className="hidden"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      <ul className="flex gap-4 overflow-x-auto">
        {images.map(({ file: { name }, previewUrl }, id) => (
          <li
            key={name}
            className="relative inline-block max-w-[150px] rounded-lg"
          >
            <img
              src={previewUrl}
              alt="업로드된 이미지"
              className="p-2 h-40 w-40"
            />
            <Button
              as="icon"
              className="absolute top-0 right-0 rounded-full bg-gray-400"
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
