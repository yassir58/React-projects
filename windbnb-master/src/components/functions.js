function toggle_btn_state (state, length, first)
{
    if (length != 0)
        return (state + length);
    else
        return (first);
}



export default toggle_btn_state;