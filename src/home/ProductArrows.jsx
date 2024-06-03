/* eslint-disable react/prop-types */
export default function ProductArrows({position, setPosition, length}) {
    return (
        <div className="product-arrows-container">
            <svg 
                onClick={() => handlePosition(position, setPosition, "left", length)}
                className='left-arrow' 
                fill="#808080" 
                height="12px" 
                width="12px" 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" 
                xmlSpace="preserve"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                <path 
                id="XMLID_92_" 
                d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
                ></path>
                </g>
            </svg>
            <svg
                onClick={() => handlePosition(position, setPosition, "right", length)}
                className='right-arrow'
                fill="#808080"
                height="12px"
                width="12px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
                data-darkreader-inline-fill=""
                style={{ "--darkreader-inline-fill": "#000000" }}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 
                C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
                C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
                </g>
            </svg>

        </div>
    );
}

function handlePosition(position, setPosition, side, length) {
    if (side === "right") {
        if (position < length ) {
            setPosition(position + 1)
        }
        else {
            setPosition(0)
        }
    } else {
        if (position > 0) {
            setPosition(position - 1)

        } else {
            setPosition(length)
        }
    }

}

