'use client';

import { Props } from '@/types';
import { createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'daily',
  setTab: (value: 'daily' | 'weekly'): void => {},
});
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('daily');
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
