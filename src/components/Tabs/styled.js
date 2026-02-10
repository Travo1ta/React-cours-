import { useState } from 'react';
import {
  TabsContainer,
  TitleList,
  TitleButton,
  TitleText,
  Content
} from './styled';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  if (!tabs?.length) return null;

  return (
    <TabsContainer>
      <TitleList role="tablist">
        {tabs.map((item, index) => {
          const isActive = index === activeTab;
          return (
            <TitleButton
              key={item.title}
              $active={isActive}
              onClick={() => {
                if (!isActive) {
                  setActiveTab(index);
                }
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.title}`}
            >
              <TitleText
                $small={!isActive}
                $active={isActive}
                as="h2"
              >
                {item.title}
              </TitleText>
            </TitleButton>
          );
        })}
      </TitleList>
      <Content
        role="tabpanel"
        id={`tabpanel-${tabs[activeTab]?.title}`}
        aria-labelledby={`tab-${tabs[activeTab]?.title}`}
      >
        {tabs[activeTab]?.content}
      </Content>
    </TabsContainer>
  );
};

export default Tabs;