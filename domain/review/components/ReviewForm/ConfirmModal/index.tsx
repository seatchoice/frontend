import { Button, Icon, Modal, Text } from "@/components";
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
      <Modal.Header className="flex items-center justify-between">
        <Text as="h4">{`${floor}층 ${section}구역 ${seatRow}열 ${seatNumber}번`}</Text>
        <Button as="icon" onClick={() => setShowModal(false)}>
          <Icon as="close" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-5 rounded-lg bg-light-fg dark:bg-dark-fg">
        <Text className="mb-2">∙ 리뷰 좌석 정보를 꼭 확인해주세요.</Text>
        <Text>∙ 좌석 정보는 수정할 수 없어요.</Text>
      </Modal.Body>
      <Modal.Footer>{SubmitButton}</Modal.Footer>
    </Modal>
  );
}
