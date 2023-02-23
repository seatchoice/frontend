import { useMemo } from "react";
import { useNotificationListQuery } from "@/domain/notification/hooks/query";
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

  return (
    <>
      <ul className="flex flex-col gap-4">
        {notificationList.map(({ id, type, url, checkAlarm }) => (
          <li
            key={id}
            className={`p-4 border-[1px] border-light-fg dark:border-dark-fg rounded-lg
            ${!checkAlarm && "bg-light-fg dark:bg-dark-fg"}`}
          >
            {type}
            {url}
          </li>
        ))}
      </ul>
      <div ref={setTarget} className="h-2"></div>
    </>
  );
}
