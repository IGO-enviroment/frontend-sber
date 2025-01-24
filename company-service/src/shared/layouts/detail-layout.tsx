import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Tab, Tabs } from '@mui/material';
import { NavigateOptions, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

export interface IPageLayoutProps {
  title: string;
  buttonsContent?: ReactNode;
}

const linkArr = ['info', 'candidates', 'interns']

export const DetailPageLayout: FC<IPageLayoutProps> = ({ title, buttonsContent }) => {
  const location = useLocation();
  const [value, setValue] = React.useState(linkArr.findIndex((item) => item === location.pathname.split('/').slice(-1)[0]));
  const params = useParams();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledPage>
      <StyledPageHeader>
        <Box display="flex" alignItems="center" sx={{ gap: '10px' }}>
          <h4>{title}</h4>
        </Box>
        <div>{buttonsContent}</div>
      </StyledPageHeader>
      <StyledMain>
        <Box sx={{ mb: '24px' }}>
          <Tabs value={value} onChange={handleChange}>
            <LinkTab label="Информация" href="info" params={params} />
            <LinkTab label="Кандидаты" href="candidates" params={params} />
            <LinkTab label="Практиканты" href="interns" params={params} />
          </Tabs>
        </Box>
        <Outlet />
      </StyledMain>
    </StyledPage>
  );
};

interface LinkTabProps {
  label?: string;
  href: string;
  selected?: boolean;
  params: NavigateOptions;
}


function LinkTab(props: LinkTabProps) {
  const navigate = useNavigate();
  return (
    <Tab
      onClick={() => {
        navigate(props.href, props.params);
      }}
      {...props}
    />
  );
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;
`;
const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 32px;
`;

const StyledPageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`;