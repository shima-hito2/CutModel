"use client";

import AccountCircle from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import type { FC } from "react";

export const Header: FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const router = useRouter();

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar
				position="sticky"
				sx={{
					top: 0,
					backgroundColor: "#FFF",
					color: "#00000080",
					boxShadow: "none",
				}}
			>
				<Toolbar>
					<Link href={"/admin"} style={{ flexGrow: 1 }}>
						<Typography variant="h6" component="div">
							管理画面
						</Typography>
					</Link>
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							{/* <MenuItem
								onClick={() => {
									setAnchorEl(null);
									router.push("/my-page");
								}}
							>
								マイページ
							</MenuItem> */}
							<MenuItem
								onClick={() => {
									setAnchorEl(null);
									router.push("/admin/list");
								}}
							>
								投稿一覧画面
							</MenuItem>
							<MenuItem
								onClick={() => {
									setAnchorEl(null);
									router.push("/admin");
								}}
							>
								ログアウト
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
};
