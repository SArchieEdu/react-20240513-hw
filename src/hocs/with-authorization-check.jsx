import { AuthorizationButton } from "../components/authorization-button/component";
import { useUser } from "../contexts/user/hooks";

export function withAuthorizationCheck(Component) {
  const ComponentWithAuthorizationCheck = (props) => {
    const user = useUser();

    if (!user) {
      return (
        <div>
          LoginPlease <AuthorizationButton />
        </div>
      );
    }

    return <Component {...props} />;
  };

  return ComponentWithAuthorizationCheck;
}
