import { useMemo } from "react";
import { Text, Button, Icon } from "@/components";
import { getDateDiffTextFromNow } from "@/utils/date";
import {
  useDeleteNotificationMutation,
  useNotificationListQuery,
} from "@/domain/notification/hooks/query";
import useIntersectionObserver from "@/domain/search/hooks/useObserver";

export function NotificationList() {
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useNotificationListQuery();
  const notificationList = useMemo(
    () => (data ? data.pages.flatMap(({ content }) => content) : []),
    [data]
  );
  const { setTarget } = useIntersectionObserver({
    onIntersect: ([{ isIntersecting }]) =>
      isIntersecting && hasNextPage && !isFetching && fetchNextPage(),
  });

  const { mutate: deleteNotification } = useDeleteNotificationMutation();

  const handleDeleteButtonClick = (notificationId: number) => {
    const isConfirmed = confirm("알림을 삭제하시겠습니까?");
    if (isConfirmed) deleteNotification(notificationId);
  };

  const alarmMessage = {
    LIKE: "좋아요를 눌렀습니다.",
    COMMENT: "댓글을 남겼습니다.",
  };

  return (
    <>
      <ul className="flex flex-col gap-4">
        {notificationList.map(
          ({ id, type, targetId, checkAlarm, createdAt, madeBy }) => (
            <li
              key={id}
              className={`flex justify-between items-center p-4 border-[1px] border-light-fg dark:border-dark-fg rounded-lg
            ${!checkAlarm && "bg-light-fg dark:bg-dark-fg"}`}
            >
              <Button as="icon" className="flex gap-4">
                <Text>{`${madeBy}님이 ${alarmMessage[type]}`}</Text>
                <Text className="text-gray-400">
                  {getDateDiffTextFromNow(createdAt)}
                </Text>
              </Button>
              <Button as="icon" onClick={() => handleDeleteButtonClick(id)}>
                <Icon as="close" />
              </Button>
            </li>
          )
        )}
      </ul>
      <div ref={setTarget} className="h-2"></div>
    </>
  );
}
