
import {ConfigProvider, ThemeConfig} from "antd";
import React, {useState} from "react";

const AntDesignProvider = ({ children }: { children: React.ReactNode }) => {

    const [colorPrimary, setColorPrimary] = useState("#00b96b");
    const [colorBgContainer, setColorBgContainer] = useState("#ffffff");

    const config: ThemeConfig = {
        cssVar: true,
        token: {
            fontFamily: "'Inter', sans-serif",
            colorPrimary,
            borderRadius: 2,
            colorLink: colorPrimary,
            colorBgContainer,
        },
        components: {
            Button: {

            },
            Input: {

            }
        }
    }

    return (
        <ConfigProvider theme={config}>
            {children}
        </ConfigProvider>
    );
};


export default AntDesignProvider;