import {
   TabsContainer,
   TitleList,
   TitleButton,
   TitleText,
   Content
} from './styled';

const Tabs = ({ tabs, activeTab = 0, onTabClick }) => {
   if (!tabs?.length) return null;

   return (
      <TabsContainer>
         <TitleList>
            {tabs.map((item) => {
               const isActive = item.title === tabs[activeTab]?.title;
               return (
                  <TitleButton
                     key={item.title}
                     $active={isActive}
                     onClick={() => {
                        const index = tabs.findIndex(tab => tab.title === item.title);
                        onTabClick?.(index);
                     }}
                  >
                     <TitleText $small={!isActive} $active={isActive}>
                        {item.title}
                     </TitleText>
                  </TitleButton>
               );
            })}
         </TitleList>
         <Content>{tabs[activeTab]?.content}</Content>
      </TabsContainer>
   );
};

export default Tabs;