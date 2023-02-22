import { Button, Icon } from "@/components";
import Image from "next/image";

type ImagePreviewProps = {
  imagePreviewUrl: string;
  onDelete: () => void;
};

export function ImagePreview({ imagePreviewUrl, onDelete }: ImagePreviewProps) {
  return (
    <div className="relative inline-block max-w-[150px] rounded-lg">
      <Image
        src={imagePreviewUrl}
        alt="업로드된 이미지"
        width={160}
        height={160}
        className="rounded-lg"
      />
      <Button
        as="icon"
        className="absolute top-1 right-1 rounded-full bg-primary-500"
        onClick={onDelete}
      >
        <Icon as="close" size={20} />
      </Button>
    </div>
  );
}
