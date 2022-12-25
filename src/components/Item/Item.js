import '../../components/Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, image, specie, origin, status}) => {

    const active = 0;
    const desactive = 0;

    if(status >= 1){

    }

  return (
    <div className="col-lg-4">
        <div className="card card-margin">
            <div className="card-header no-border">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body pt-0 bg-white">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper bg-white">
                        <div className="widget-49-date-primary bg-white mb-3">
                          <img src={image} alt='character'/>
                        </div>
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title bg-white">{specie}</span>
                            <span className="widget-49-meeting-time bg-white">{origin}</span>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points bg-white">
                    <li className="widget-49-meeting-item bg-white"><span className='bg-white text-black'>Expand module is removed</span></li>
                        <li className="widget-49-meeting-item bg-white"><span className='bg-white text-black'>Data migration is in scope</span></li>
                        <li className="widget-49-meeting-item bg-white"><span className='bg-white text-black'>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div className="widget-49-meeting-action bg-white">
                        <Link href="#" className="btn btn-sm btn-flash-border-primary">View All</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item

