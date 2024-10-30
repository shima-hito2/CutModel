import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { type FC, useState } from "react";

const searchList = ["条件1", "条件2", "条件3"];

export const ArticleSearchFilter: FC = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Box
				sx={{
					width: "calc(100% - 64px)",
					display: "flex",
					backgroundColor: "#FFF",
					m: 2,
					p: 2,
					borderRadius: 2,
					justifyContent: "space-between",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<SearchIcon sx={{ pr: 2 }} />
					<Typography
						sx={{
							fontWeight: "bold",
							fontSize: "clamp(10px,1.4vw,20px)",
							textWrap: "nowrap",
						}}
					>
						検索条件
					</Typography>
					{searchList.map((item) => (
						<Typography
							key={item}
							sx={{ fontSize: "clamp(8px,1.4vw,12px)", pl: 1 }}
						>
							{item}
						</Typography>
					))}
				</Box>
				<Button
					variant="contained"
					onClick={handleOpen}
					sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}
				>
					検索条件追加
				</Button>
			</Box>
			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "80%",
						maxWidth: 400,
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
						borderRadius: 2,
					}}
				>
					<TextField sx={{ m: 1 }} label="メニュー" variant="outlined" />
					<TextField sx={{ m: 1 }} label="場所" variant="outlined" />
					<TextField sx={{ m: 1 }} label="料金" variant="outlined" />
					<Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
						<Button variant="contained" color="inherit" onClick={handleClose}>
							キャンセル
						</Button>
						<Button variant="contained" onClick={handleClose}>
							追加
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
