type Review = Seat & {
  id: number;
  rating: Rating;
  content: string;
  likeAmount: number;
  image: [
    {
      imageUrl: string;
    }
  ];
};

type ReviewWithThumbnail = Omit<ReviewResponse, "image"> & {
  thumbnail: string;
};

type ReviewDetail = Seat & {
  userId: number;
  nickname: string;
  createdAt: string;
  rating: Rating;
  content: string;
  images: Array<string>;
  likeAmount: number;
  likeChecked: boolean;
};
