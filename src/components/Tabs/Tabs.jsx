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
      <TitleList role="tablist"> {/* Добавляем роль для доступности */}
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
              role="tab" // Роль для доступности
              aria-selected={isActive} // Состояние для скринридеров
              aria-controls={`tabpanel-${item.title}`} // Связь с контентом
            >
              <TitleText 
                $small={!isActive} 
                $active={isActive}
                as="h2" // Меняем тег на h2 для заголовков табов
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