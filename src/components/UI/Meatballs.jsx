import { Button, Menu, MenuItem } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
export default function Meatballs({ ...restProps }) {
    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={restProps.open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={restProps.open ? 'true' : undefined}
                onClick={restProps.handleClick}
            >
                <MeatballsIcon />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={restProps.anchorEl}
                open={restProps.open}
                onClose={restProps.handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {restProps.arrayIcon.map((item) => (
                    <MenuItem onClick={restProps.handleClose} key={item.id}>
                        <img
                            src={item.icon}
                            alt="#"
                            style={{ marginRight: '10px' }}
                        />
                        {item.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}