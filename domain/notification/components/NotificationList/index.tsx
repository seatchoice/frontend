import Link from "next/link";
import { useMemo } from "react";
import { Text, Button, Icon } from "@/components";
import { getDateDiffTextFromNow } from "@/utils/date";
import {
  useDeleteNotificationMutation,
  useNotificationListQuery,
  useReadMutation,
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

  const { mutate: readNotification } = useReadMutation();
  const handleNotificationClick = (notificationId: number) => {
    readNotification(notificationId);
  };

  const alarmMessage = {
    LIKE: "좋아요를 눌렀습니다.",
    COMMENT: "댓글을 남겼습니다.",
  };

  return (
    <>
      {notificationList.length ? (
        <ul className="flex flex-col gap-4">
          {notificationList.map(
            ({
              id,
              type,
              targetReviewId,
              checkAlarm,
              createdAt,
              targetMember,
              alarmMessage: message,
            }) => (
              <li
                key={id}
                className={`flex justify-between items-center px-4 border-[1px] border-light-fg dark:border-dark-fg rounded-lg hover:bg-primary-200 hover:dark:bg-primary-800 transition duration-150 ease-out hover:ease-in
                            ${!checkAlarm && "bg-light-fg dark:bg-dark-fg"}`}
              >
                <Link
                  href={`reviews/${targetReviewId}`}
                  onClick={() => handleNotificationClick(id)}
                  className="w-full p-4"
                >
                  <div className="flex gap-4">
                    <Text>
                      <span className="font-semibold">{targetMember}</span>
                      {`님이 ${alarmMessage[type]}`}
                    </Text>
                    <Text className="text-gray-400">
                      {getDateDiffTextFromNow(createdAt)}
                    </Text>
                  </div>
                  {type === "COMMENT" && (
                    <Text className="mt-2 font-semibold text-primary-700 dark:text-primary-300">
                      {message}
                    </Text>
                  )}
                </Link>
                <Button as="icon" onClick={() => handleDeleteButtonClick(+id)}>
                  <Icon as="close" />
                </Button>
              </li>
            )
          )}
          <div ref={setTarget} className="h-2"></div>
        </ul>
      ) : (
        <Text className="py-4 text-lg text-center font-semibold">
          알림이 없습니다
        </Text>
      )}
    </>
  );
}
