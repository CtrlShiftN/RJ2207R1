import './profile.css';
export default function ProfileCard() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-4"></div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow pb-4">
                        <div className="card-body px-0 pt-0 text-center rounded-3">
                            <img className="img-fluid shadow rounded-top" src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"></img>
                            <img className="img-thumbnail shadow avatar rounded-circle" src="https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"></img>
                            <h4 className="pt-2">Quyen Ngo Van</h4>
                            <p className="py-3 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus mi ut velit interdum, in vestibulum nunc congue. </p>
                            <a className="" href='https://www.facebook.com/thedoctor2404' target='blank'>
                                <button className="shadow p-2 px-3 btn btn-info text-white fw-bold">Follow</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-4"></div>
            </div>
        </div>
    )
}