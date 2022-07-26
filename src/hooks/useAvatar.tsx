import { useState } from 'react';

export const useAvatar = () => {
  const [avatar, setAvatar] = useState('');

  return (githubUsername: string) => {
    const url = `https://api.github.com/users/${githubUsername}`;

    void (async () => {
      const res = await fetch(url);
      if (!res.ok) {
        setAvatar(() => '');
      } else {
        const data = (await res.json()) as { avatar_url: string };
        setAvatar(() => data.avatar_url);
      }
    })();
    return avatar;
  };
};
