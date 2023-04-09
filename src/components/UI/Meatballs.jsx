import { Button, Menu, MenuItem } from '@mui/material'
import { ReactComponent as MeatballsIcon } from '../../assets/icons/meatballs.svg'
import { useMeatballs } from '../../hooks/useMeatballs'

export default function Meatballs({ arrayIcon, ...restProps }) {

    const { open, handleClick, anchorEl, handleClose } = useMeatballs();

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MeatballsIcon />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                {arrayIcon.map((item) => (
                    <MenuItem onClick={handleClose}>
                        <img src={item.icon} alt="#" style={{ marginRight: '10px' }} />
                        {item.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}