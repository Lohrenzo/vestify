import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import img from "../assets/img/crypto_set.jpg";

const Accordion = styled((props) => (
<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
<MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
/>
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
padding: theme.spacing(2),
borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
const [expanded, setExpanded] = React.useState('panel1');

const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
};

return (
    <section className="bg-[#ffffff] text-black flex flex-col justify-center items-center p-5">
        <div className="flex justify-center items-center">
            <img className='lg:w-[50%] lg:inline hidden object-contain' src={img} alt="" />
            <div className='lg:w-[50%] w-[90%] mb-5 border-none outline-none'>
                <h3 className="lg:text-left mb-[2rem] text-[2.2rem] lg:text-[2.6rem]">Frequently Asked Questions</h3>
                <Accordion sx={{ border: "none", marginRight: "3rem" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary 
                        // sx={{background: "black", color: "white"}} 
                        aria-controls="panel1d-content" id="panel1d-header"
                    >
                        <Typography sx={{ fontWeight: "700", textTransform: "capitalize"}}>How Can I Register A New Accout?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            From the home page click on the Get started  button and fill in the required details to register an account.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ border: "none", marginRight: "3rem" }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography sx={{ fontWeight: "700", textTransform: "capitalize"}}>How Long Does It Take For My deposit to be credited to my account</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Your deposit is automatically added once your payment has been confirmed by the system. Typically takes about 2-4 hours.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ border: "none", marginRight: "3rem" }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography sx={{ fontWeight: "700", textTransform: "capitalize"}}>how do I request for withdrawal?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can request for withdrawal by clicking on the “Withdraw Funds” Button in the members area and entering the amount you want to withdraw.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ border: "none", marginRight: "3rem" }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography sx={{ fontWeight: "700", textTransform: "capitalize"}}>how long does the withdrawal process take?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Usually just a few hours, we try our best to ensure withdrawals are speedily disbursed.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </section>
);
}
