import { Button, Icon, Modal, Text } from "@/components";
import { useNextRouter } from "@/hooks/useNextRouter";
import { StateAndAction } from "@/types/state";
import Link from "next/link";

type ReviewModalProps = StateAndAction<boolean, "showModal">;

export function NoReviewModal({ showModal, setShowModal }: ReviewModalProps) {
  const {
    query: { theater, name },
  } = useNextRouter();
  return (
    <Modal
      open={showModal}
      className="flex flex-col gap-4 min-w-[300px] text-center"
    >
      <Modal.Header className="flex justify-end items-center">
        <Button as="icon" onClick={() => setShowModal(false)}>
          <Icon as="close" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Text className="text-xl font-semibold mb-2">등록된 리뷰가 없어요</Text>
        <Text className="font-semibold text-gray-300">
          지금 바로 리뷰를 남겨보세요
        </Text>
      </Modal.Body>
      <Modal.Footer className="flex flex-col py-2">
        <Link
          href={`/${theater}/post?name=${name}`}
          className="p-3 px-6 rounded-lg font-semibold bg-primary-200 text-primary-900 dark:bg-primary-800 dark:text-primary-200 active:translate-y-px"
        >
          리뷰 작성하기
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
