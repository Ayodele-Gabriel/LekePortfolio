import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../../UI";
import {
  AppLogo,
  ChevonDown,
  Settings,
  Profile,
  Logout,
  RightChevon,
} from "../../public/assets/convertedSvg";
import Container, { DashboardTopStyle, MainDashboardContainer } from "./styles";

const Dashboard = ({ title, rightHeader, children }) => {
  const router = useRouter();
  const { pathname } = useRouter();
  const [showPopup, setDisplay] = useState<Boolean>(false);
  const dropDownLists = [
    {
      title: "Profile",
      icon: <Profile />,
      link: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: <Settings />,
      link: "/dashboard/settings",
    },
    {
      title: "Logout",
      icon: <Logout />,
    },
  ];

  return (
    <Container>
      <DashboardTopStyle>
        <Link href="/dashboard">
          <a className="app-logo">
            <AppLogo />
          </a>
        </Link>
        <div className="middle-container">
          <div
            role="button"
            className={`workspace-container ${
              showPopup ? "active-workspace" : ""
            }`}
            tabIndex={"-1"}
            onClick={() => setDisplay(!showPopup)}
          >
            <div className="initials-container">W</div>
            <p>Workspace name</p>
            <Button icon className="chevon-btn">
              <ChevonDown />
            </Button>
            <div
              className={`dropdown-lists ${
                showPopup ? "active-dropdown_lists" : ""
              }`}
              onClick={() => {
                setDisplay(!showPopup);
              }}
            >
              {dropDownLists.map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    router.push(item.link);
                  }}
                >
                  <span>
                    {item.icon}
                    {item.title}
                  </span>
                  <RightChevon />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button
          className="add-btn"
          onClick={() => router.push("?modal=newProject")}
        >
          <IoMdAdd />
          New Project
        </Button>
      </DashboardTopStyle>
      <MainDashboardContainer>
        <aside className="dashboard-aside">
          <nav>
            {[
              {
                link: "/dashboard/myprojects",
                alt: "/dashboard/createProject",
                title: "My Projects",
                badge: 0,
                hasBadge: true,
              },
              {
                link: "/dashboard/clusters",
                title: "Clusters",
                badge: 0,
                hasBadge: true,
              },
              {
                link: "/dashboard/services",
                title: "Services",
                badge: 0,
              },
              {
                link: "/dashboard/integrations",
                title: "Integrations",
                badge: 0,
                hasBadge: true,
              },
            ].map((item) => (
              <Link href={item.link} key={item.title}>
                <a
                  className={
                    pathname === item.link || pathname === item.alt
                      ? "active"
                      : ""
                  }
                >
                  {item.title}
                  {item.hasBadge && (
                    <div className="badge-item">{item.badge}</div>
                  )}
                </a>
              </Link>
            ))}
          </nav>
        </aside>
        <div className="dashboard-content">
          <header className="dashboard-header">
            <h1>{title}</h1>
            {rightHeader && rightHeader}
          </header>
          <div className="dashboard-content_cover">
            <div className="dashboard-content-container">{children}</div>
          </div>
        </div>
      </MainDashboardContainer>
    </Container>
  );
};

export default Dashboard;
