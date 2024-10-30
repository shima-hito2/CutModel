"use client";

import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/navigation";
import * as React from "react";
import type { FC } from "react";

export const Footer: FC = () => {
	const router = useRouter();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				sx={{
					position: "fixed",
					bottom: 0,
					height: 64,
					width: "100%",
					backgroundColor: "#FFF",
					color: "#00000080",
					boxShadow: "none",
					mt: "auto",
				}}
			>
				<Toolbar>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<IconButton
							onClick={() => {
								// router.push("/list");
							}}
						>
							<HomeIcon />
						</IconButton>
						<IconButton
							onClick={() => {
								router.push("/list");
							}}
						>
							<SearchIcon />
						</IconButton>
						<IconButton
							onClick={() => {
								// router.push("/list");
							}}
						>
							<CategoryIcon />
						</IconButton>
						<IconButton
							onClick={() => {
								router.push("/my-page");
							}}
						>
							<PersonIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
