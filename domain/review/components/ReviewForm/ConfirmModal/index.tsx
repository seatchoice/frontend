import { Button, Modal, Text } from "@/components";
import { StateAndAction } from "@/types/state";

type ConfirmModal = {
  seat: Seat;
  SubmitButton: React.ReactNode;
} & StateAndAction<boolean, "showModal">;

export function ConfirmModal({
  seat,
  SubmitButton,
  showModal,
  setShowModal,
}: ConfirmModal) {
  const { floor, section, seatRow, seatNumber } = seat;
  return (
    <Modal open={showModal} className="flex flex-col gap-7">
      <Modal.Header>{`${floor}층 ${section}구역 ${seatRow}열 ${seatNumber}번`}</Modal.Header>
      <Modal.Body>
        <Text>위 좌석에 리뷰를 작성하시겠습니까?</Text>
        <Text>좌석 정보는 수정할 수 없어요.</Text>
      </Modal.Body>
      <Modal.Footer>
        {SubmitButton}
        <Button
          onClick={() => setShowModal(false)}
          className="bg-light-fg dark:bg-dark-fg"
        >
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
