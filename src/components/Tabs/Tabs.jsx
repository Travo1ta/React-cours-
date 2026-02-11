import { useState } from 'react';
import {
   TabsContainer,
   TitleList,
   TitleButton,
   TitleText,
   Content
} from './styled';

const Tabs = ({ tabs }) => { // Убираем activeTab и onTabClick из пропсов
   const [activeTab, setActiveTab] = useState(0); // Добавляем внутреннее состояние

   if (!tabs?.length) return null;

   return (
      <TabsContainer>
         <TitleList role="tablist">
            {tabs.map((tab, index) => {
               const isActive = index === activeTab; // Сравниваем ИНДЕКСЫ!
               
               return (
                  <TitleButton
                     key={tab.title}
                     $active={isActive}
                     onClick={() => setActiveTab(index)} // Используем setActiveTab
                     role="tab"
                     aria-selected={isActive}
                     aria-controls={`tabpanel-${tab.title}`}
                  >
                     <TitleText
                        $small={!isActive}
                        $active={isActive}
                        as="h2"
                     >
                        {tab.title}
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