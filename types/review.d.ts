type Review = {
  id: number;
  floor: number;
  section: string;
  row: number;
  seatNumber: number;
  rating: number;
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

type ReviewDetail = {
  userId: number;
  nickname: string;
  createdAt: string;
  floor: number;
  section: string;
  seatRow: number;
  seatNumber: number;
  rating: number;
  content: string;
  images: Array<string>;
  likeAmount: number;
  likeChecked: boolean;
};
