function toggle_btn_state (state, length, first)
{
    if (length != 0)
        return (state + length);
    else
        return (first);
}

function updateChild ()
{
    let value = 0;
    return (op)=>{
        if (op == 1 && value > 0)
            value--;
        else if (op == 0)
            value++;
        return value;
    }
}
function updateAdult ()
{
    let value = 0;
    return (op)=>{
        if (op == 1 && value > 0)
            value--;
        else if (op == 0)
            value++;
        return value;
    }
}

function locationFilter (list, location)
{
    let regex = new RegExp (location , 'i');
    const rsArr = list.filter ((item)=>{
        if (item.city.match (regex))
            return item;
    });
    return rsArr;
}

function guestFilter (list, Guests)
{
    const rsArr = list.filter ((item)=>{
        if (Guests <= item.maxGuests)
            return item;
    });
    return rsArr;
}
function filter_update  (inputType, props ,adultsState, childrenState, locationState, setLocation, flag, setChildren, setAdults)
{
    let resArr;
    if (flag == 1)
    {
        props.dropSetter (0);
        setLocation ("");
        setChildren ("0");
        setAdults ("0");
    }
    else
    {

        if (inputType)
        {
            resArr = guestFilter (props.dataProp, (parseInt (adultsState) + parseInt (childrenState)));
            props.setState (resArr);
        }
        else
        {
            resArr = locationFilter (props.dataProp, locationState);
            props.setState (resArr);
        }
    }
}

const updateAdValue =  updateAdult();
const updateChldValue = updateChild ();

export {toggle_btn_state, updateAdult, updateChild, updateAdValue, updateChldValue, locationFilter, guestFilter, filter_update};