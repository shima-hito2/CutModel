import { Box, Button, Modal, Step, StepLabel, Stepper } from "@mui/material";
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
			<Modal open={open} onClose={handleClose}>
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
								<StepLabel>予約日の設定</StepLabel>
							</Step>
							<Step>
								<StepLabel>予約の情報入力</StepLabel>
							</Step>
							<Step>
								<StepLabel>予約の確認</StepLabel>
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
					<Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
						<Button
							variant="contained"
							color="inherit"
							onClick={() => {
								setCurrentStep(currentStep - 1);
							}}
						>
							閉じる
						</Button>
						<Button
							variant="contained"
							onClick={() => {
								setCurrentStep(currentStep + 1);
							}}
						>
							次へ
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
