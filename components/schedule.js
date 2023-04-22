import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './schedule.css';

const   BasicTable = () => {
    return(
        <div>
            <div className='secback'>
            <Stack direction="row">
                <div className="arrow5"><Link to="/Home" id='link1'><ArrowBackIcon/></Link></div>
                <div className="head5"><h1 className="aa5">Flight Schedule</h1></div>
            </Stack>

            </div>
        <table class="table5">
            <tr class="r10">
                <th>Time</th>
                <th>Flight</th>
                <th>Places</th>
                <th>Gate</th>
                <th>Info</th>
            </tr>
            <tr class="r101">
                <td>03:25</td>
                <td>ENT 1271</td>
                <td>Kos</td>
                <td>25</td>
                <td>Delayed</td>
            </tr>
            <tr class="r102">
                <td>04:05</td>
                <td>GE 315</td>
                <td>Guwahati</td>
                <td>26</td>
                <td>Gateclosed</td>
            </tr>
            <tr class="r101">
                <td>05:00</td>
                <td>6E 358</td>
                <td>Impal</td>
                <td>01</td>
                <td>Final Call</td>
            </tr>
            <tr class="r102">
                <td>08:47</td>
                <td>WS 1505</td>
                <td>Nepal</td>
                <td>05</td>
                <td>Boarding : 08:30</td>
            </tr>
            <tr class="r101">
                <td>09:37</td>
                <td>LO 361</td>
                <td>New York</td>
                <td>30</td>
                <td>Final Call</td>
            </tr>
            <tr class="r102">
                <td>10:00</td>
                <td>LO 550</td>
                <td>Chennai</td>
                <td>20</td>
                <td>Delayed</td>
            </tr>
            <tr class="r101">
                <td>13:27</td>
                <td>7E 008</td>
                <td>Banglore</td>
                <td>32</td>
                <td>Boarding : 13:15</td>
            </tr>
            <tr class="r102">
                <td>17:00</td>
                <td>6E 009</td>
                <td>Delhi</td>
                <td>06</td>
                <td>Delayed</td>
            </tr>
            <tr class="r101">
                <td>18:15</td>
                <td>7E 152</td>
                <td>Mubai</td>
                <td>36</td>
                <td>Final Call</td>
            </tr>
            <tr class="r102">
                <td>19:20</td>
                <td>8E 650</td>
                <td>Kolkata</td>
                <td>40</td>
                <td>Final Call</td>
            </tr>
            <tr class="r101">
                <td>22:37</td>
                <td>7E 730</td>
                <td>Dubai</td>
                <td>19</td>
                <td>Delayed</td>
            </tr>
            <tr class="r102">
                <td>24:00</td>
                <td>ENT 1735</td>
                <td>Turki</td>
                <td>24</td>
                <td>Boarding : 23:45</td>
            </tr>
        </table>
        </div>
    )
}

export default BasicTable;