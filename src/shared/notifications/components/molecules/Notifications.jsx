import { useDispatch, useSelector } from "react-redux"
import { remove } from "../../stores/notifications"
import { Notification } from "../atoms/Notification"

export const Notifications = () => {
  const notifications = useSelector((state) => state.notifications)
  const dispatch = useDispatch()

  return (
    <>
      {notifications.map(({ isError, message }, index) =>
        <Notification isError={isError} message={message} key={index} close={() => dispatch(remove(index))} />)}
    </>
  )
}
