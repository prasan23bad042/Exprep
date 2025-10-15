import UserAvatar from '../UserAvatar';

export default function UserAvatarExample() {
  return (
    <div className="p-6 bg-background">
      <UserAvatar user={{ name: 'Priya Kumar', loggedIn: true }} />
      <div className="mt-4">
        <UserAvatar user={{ name: 'Guest', loggedIn: false }} />
      </div>
    </div>
  );
}
