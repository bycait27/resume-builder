import {
    Box,
    Typography,
    Button,
    TextField,
    Card
} from  '@mui/material'

function PersonalInfo() {
    return (
        <Box>
            <Card>
                {/* user's name */}
                <Typography>
                    Your Name:
                </Typography>
                <TextField></TextField>
                {/* user's location */}
                <Typography>
                    Your Location:
                </Typography>
                <TextField
                helperText={'City, State'}
                ></TextField>
                {/* user's phone number */}
                <Typography>
                    Phone Number:
                </Typography>
                <TextField></TextField>
                {/* user's email */}
                <Typography>
                    Email:
                </Typography>
                <TextField></TextField>
                {/* user's portfolio link */}
                <Typography>
                    Portfolio Link:
                </Typography>
                <TextField></TextField>
                {/* user's GitHub link */}
                <Typography>
                    GitHub Link:
                </Typography>
                <TextField></TextField>
                {/* user's LinkedIn link */}
                <Typography>
                    LinkedIn Link:
                </Typography>
                <TextField></TextField>
                <Button>
                    Submit Info
                </Button>
            </Card>
        </Box>
    )
}

export default PersonalInfo