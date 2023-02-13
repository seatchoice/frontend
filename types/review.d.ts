type ReviewResponse = {
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
