"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { type FC, useState } from "react";
import { Profile, ReservationHistory, Settings } from "./components";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

export const MyPage: FC = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	function a11yProps(index: number) {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	}

	return (
		<>
			<Box sx={{ width: "100%", pt: 2 }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="プロフィール" {...a11yProps(0)} />
						<Tab label="予約履歴" {...a11yProps(1)} />
						<Tab label="設定" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<CustomTabPanel value={value} index={0}>
					<Profile />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
					<ReservationHistory />
				</CustomTabPanel>
				<CustomTabPanel value={value} index={2}>
					<Settings />
				</CustomTabPanel>
			</Box>
		</>
	);
};
