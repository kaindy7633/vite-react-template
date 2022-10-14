import React from 'react';
import { Button } from 'antd';
import { getUserInfo } from '@/api/auth';
import { useStore } from '@/store';
import Header from '@/components/Header';

const Home: React.FC = () => {
  const getVotes = useStore((state) => state.votes);
  const addVotes = useStore((state) => state.addVotes);
  const subtractVotes = useStore((state) => state.subtractVotes);

  const fakeRequestMock = async () => {
    try {
      const _result = await getUserInfo();
      console.log('_result', _result);
    } catch (err) {
      throw new Error(`err`);
    }
  };

  return (
    <div className="grid place-content-center h-screen text-center text-lg">
      <Header />
      <p className="mt-5">{getVotes} People</p>
      <p>
        <Button type="primary" className="rounded-md" onClick={addVotes}>
          Case a Votes
        </Button>
        <Button type="primary" className="rounded-md" onClick={subtractVotes}>
          Delete a Votes
        </Button>
      </p>
      <p>
        <Button type="primary" onClick={() => fakeRequestMock()}>
          点击请求
        </Button>
      </p>
    </div>
  );
};

export default Home;
