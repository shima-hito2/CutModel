import {
	Box,
	Button,
	Modal,
	Step,
	StepLabel,
	Stepper,
	TextField,
	Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/ja";
import { type FC, useState } from "react";

type Props = {
	open: boolean;
	handleClose: () => void;
};

export const ReservationDialog: FC<Props> = (props: Props) => {
	const { open, handleClose } = props;
	const [currentStep, setCurrentStep] = useState(0);
	return (
		<>
			<Modal open={open}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "80%",
						maxWidth: 800,
						bgcolor: "background.paper",
						boxShadow: 24,
						p: 4,
						borderRadius: 2,
					}}
				>
					<Box sx={{ width: "100%", pb: 2 }}>
						<Stepper activeStep={currentStep} alternativeLabel>
							<Step>
								<StepLabel>
									<Typography sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}>
										予約日の設定
									</Typography>
								</StepLabel>
							</Step>
							<Step>
								<StepLabel>
									<Typography sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}>
										予約の情報入力
									</Typography>
								</StepLabel>
							</Step>
							<Step>
								<StepLabel>
									<Typography sx={{ fontSize: "clamp(8px,1.2vw,12px)" }}>
										予約の確認
									</Typography>
								</StepLabel>
							</Step>
						</Stepper>
					</Box>
					{currentStep === 0 && (
						<Box>
							<LocalizationProvider
								dateAdapter={AdapterDayjs}
								adapterLocale={"ja"}
								dateFormats={{
									year: "YYYY年",
									month: "MM月",
									monthShort: "MM月",
								}}
							>
								<DateCalendar views={["month", "day"]} />
							</LocalizationProvider>
						</Box>
					)}
					{currentStep === 1 && (
						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "60%",
									px: "20%",
									mb: 1,
								}}
							>
								<Box sx={{ width: "40%" }}>
									<Typography
										sx={{
											fontSize: "clamp(8px,1.2vw,12px)",
											color: "#00000060",
										}}
									>
										予約日時
									</Typography>
								</Box>
								<Box sx={{ width: "60%" }}>
									<Typography sx={{ fontSize: "clamp(12px,1.2vw,16px)" }}>
										2024年12月15日 14:00
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "top",
									justifyContent: "center",
									width: "60%",
									px: "20%",
								}}
							>
								<Box sx={{ width: "40%" }}>
									<Typography
										sx={{
											fontSize: "clamp(8px,1.2vw,12px)",
											color: "#00000060",
										}}
									>
										備考
									</Typography>
								</Box>
								<Box sx={{ width: "60%" }}>
									<TextField
										multiline
										fullWidth
										rows={4}
										sx={{
											"& .MuiInputBase-root": {
												padding: "4px 8px",
											},
										}}
										inputProps={{
											style: { fontSize: "clamp(8px,1.2vw,12px)" },
										}}
									/>
								</Box>
							</Box>
						</Box>
					)}
					{currentStep === 2 && (
						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: "60%",
									px: "20%",
									mb: 1,
								}}
							>
								<Box sx={{ width: "40%" }}>
									<Typography
										sx={{
											fontSize: "clamp(8px,1.2vw,12px)",
											color: "#00000060",
										}}
									>
										予約日時
									</Typography>
								</Box>
								<Box sx={{ width: "60%" }}>
									<Typography sx={{ fontSize: "clamp(12px,1.2vw,16px)" }}>
										2024年12月15日 14:00
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "top",
									justifyContent: "center",
									width: "60%",
									px: "20%",
								}}
							>
								<Box sx={{ width: "40%" }}>
									<Typography
										sx={{
											fontSize: "clamp(8px,1.2vw,12px)",
											color: "#00000060",
										}}
									>
										備考
									</Typography>
								</Box>
								<Box sx={{ width: "60%" }}>
									<Box
										sx={{
											fontSize: "clamp(12px,1.2vw,16px)",
											maxHeight: 200,
											overflow: "auto",
										}}
									>
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ 備考ほにゃほにゃ
										備考ほにゃほにゃ 備考ほにゃほにゃ
									</Box>
								</Box>
							</Box>
						</Box>
					)}
					<Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
						{currentStep < 1 ? (
							<Button variant="contained" color="inherit" onClick={handleClose}>
								キャンセル
							</Button>
						) : (
							<Button
								variant="contained"
								color="inherit"
								onClick={() => {
									setCurrentStep(currentStep - 1);
								}}
							>
								前へ
							</Button>
						)}
						{currentStep > 1 ? (
							<Button
								variant="contained"
								onClick={() => {
									setCurrentStep(0);
									handleClose();
								}}
							>
								予約する
							</Button>
						) : (
							<Button
								variant="contained"
								onClick={() => {
									setCurrentStep(currentStep + 1);
								}}
							>
								次へ
							</Button>
						)}
					</Box>
				</Box>
			</Modal>
		</>
	);
};
