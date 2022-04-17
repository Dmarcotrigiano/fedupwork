import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { MdGrade, MdPayment, MdVerified } from 'react-icons/md';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const JobCard = () => {
  const data = {
    jobTitle: 'Hello World',
    paytype: 'Hourly',
    payrate: '$10.00 - $25.00',
    experience: 'Entry',
    projectLength: '1 to 3 Months',
    createdAt: '',
    isUS: true,
    description:
      'lorem ipsum dolor sit amet, consectetur adipis dis eiusmod tempor incididunt ut lab ord',
    tags: ['Data Entry', 'Virtual Assistant', 'Administrative Support'],
    proposals: 'Less than 5',
    paymentVerified: true,
    rating: 4,
    amountSpent: '$100k+',
    location: 'United States',
  };
  return (
    <Paper sx={{ paddingY: 2 }} elevation={3}>
      <Container>
        <Typography sx={{ fontSize: 20 }} variant="h3">
          Hello World
        </Typography>
        <Box sx={{ display: 'flex', width: '70%', paddingY: '6px' }}>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
            {data.paytype}: {data.payrate}
          </Typography>
          <Typography sx={{ paddingLeft: '1ch', fontSize: 14 }}>
            - {data.experience} -
          </Typography>
          <Typography sx={{ paddingLeft: '1ch', fontSize: 14 }}>
            {data.projectLength}
          </Typography>
          <Typography sx={{ paddingLeft: '1ch', fontSize: 14 }}>
            {data.createdAt}
          </Typography>
        </Box>
        <Typography paragraph variant="body1">
          {data.description}
        </Typography>
        {data.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
        <Box sx={{ display: 'flex', paddingY: '6px' }}>
          <Typography sx={{ fontSize: 14 }}>Proposals: </Typography>
          <Typography
            sx={{ paddingLeft: '1ch', fontSize: 14, fontWeight: 'bold' }}
          >
            {data.proposals}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {data.paymentVerified ? (
            <>
              <MdVerified fill="blue" />{' '}
              <Typography sx={{ paddingLeft: '1ch', fontSize: 14 }}>
                Payment Verified
              </Typography>
            </>
          ) : (
            <>
              <MdPayment />{' '}
              <Typography sx={{ paddingLeft: '1ch', fontSize: 14 }}>
                Payment Unverified
              </Typography>
            </>
          )}
          <Box
            display={{ display: 'flex', marginTop: '2px', paddingLeft: '1ch' }}
          >
            {new Array(5).fill(null).map((_, i) => {
              if (i + 1 <= data.rating) {
                return <MdGrade fill="green" />;
              }
              return <MdGrade fill="grey" />;
            })}
          </Box>
          <Typography
            sx={{ paddingLeft: '1ch', fontSize: 14, fontWeight: 'bold' }}
          >
            {data.amountSpent}
          </Typography>
          <Typography
            sx={{
              paddingTop: '1px',
              paddingLeft: '1ch',
              fontSize: 12,
              fontColor: 'grey',
            }}
          >
            spent
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};
export default JobCard;
