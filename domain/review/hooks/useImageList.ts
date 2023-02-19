import { useState } from "react";

type ImageFiles = Array<{
  id: symbol | number;
  file?: Blob;
  imagePreviewUrl: string;
}>;

type useImageListProps = {
  initialImageList?: ImageFiles;
};

export function useImageList({ initialImageList }: useImageListProps) {
  const [imageList, setImageList] = useState<ImageFiles>(
    initialImageList ?? []
  );
  const [deletedImageList, setDeletedImageList] = useState<string[]>([]);

  const handleImageListChange = (
    e: React.ChangeEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    const newImages = Array.from(e.target.files as ArrayLike<File>).map(
      (file) => ({
        id: Symbol(),
        file,
        imagePreviewUrl: URL.createObjectURL(file),
      })
    );

    setImageList([...imageList, ...newImages]);
  };

  const handleImageDeleteButton = (id: symbol | number) => {
    const newImages = imageList.filter(({ id: _id }) => _id !== id);
    setImageList(newImages);

    setDeletedImageList([
      ...deletedImageList,
      ...imageList
        .filter(({ id: _id, file }) => _id === id && !file)
        .map(({ imagePreviewUrl }) => imagePreviewUrl),
    ]);
  };

  return {
    imageList,
    deletedImageList,
    onImageListChange: handleImageListChange,
    onImageDelete: handleImageDeleteButton,
  };
}
