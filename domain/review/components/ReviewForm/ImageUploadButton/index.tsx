import { Icon, Text } from "@/components";

type ImageUploadButtonProps<T extends React.ElementType> = Component<T> & {};

export function ImageUploadButton({
  onChange,
}: ImageUploadButtonProps<"input">) {
  return (
    <>
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
        onChange={onChange}
      />
    </>
  );
}
