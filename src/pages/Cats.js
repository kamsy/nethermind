import React, { useState, Children, Fragment, useEffect } from "react";
import "../style/cats.scss";
import { connect } from "react-redux";
import logoutUser from "../actionCreators/logoutUser";
import getBreeds from "../actionCreators/getBreeds";
import getImages from "../actionCreators/getImages";
import setBreed from "../actionCreators/setBreed";

const LogoutSvg = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path
                d="M17.4369 8.43781H10.3121C10.0016 8.43781 9.74963 8.18582 9.74963 7.87532C9.74963 7.56483 10.0016 7.31284 10.3121 7.31284H17.4369C17.7474 7.31284 17.9994 7.56483 17.9994 7.87532C17.9994 8.18582 17.7474 8.43781 17.4369 8.43781Z"
                fill="#F80300"
            />
            <path
                d="M14.6245 11.2502C14.4805 11.2502 14.3366 11.1954 14.227 11.0853C14.0073 10.8654 14.0073 10.5092 14.227 10.2895L16.642 7.87464L14.227 5.45964C14.0073 5.23992 14.0073 4.8837 14.227 4.66398C14.4468 4.44412 14.8031 4.44412 15.0228 4.66398L17.8352 7.4764C18.0549 7.69612 18.0549 8.05234 17.8352 8.27206L15.0228 11.0845C14.9125 11.1954 14.7686 11.2502 14.6245 11.2502Z"
                fill="#F80300"
            />
            <path
                d="M5.99986 18C5.83933 18 5.68703 17.9775 5.53488 17.9302L1.02142 16.4265C0.407305 16.212 0 15.6398 0 15.0001V1.50055C0 0.673304 0.672754 0.000549316 1.5 0.000549316C1.66039 0.000549316 1.81269 0.0230706 1.96498 0.0703103L6.4783 1.57402C7.09255 1.78852 7.49972 2.36075 7.49972 3.00041V16.5C7.49972 17.3272 6.8271 18 5.99986 18ZM1.5 1.12551C1.29374 1.12551 1.12496 1.29429 1.12496 1.50055V15.0001C1.12496 15.1598 1.23222 15.3083 1.3852 15.3616L5.8775 16.8585C5.90977 16.869 5.95179 16.875 5.99986 16.875C6.20612 16.875 6.37475 16.7063 6.37475 16.5V3.00041C6.37475 2.8407 6.2675 2.69225 6.11452 2.63897L1.62222 1.14199C1.58995 1.13156 1.54793 1.12551 1.5 1.12551Z"
                fill="#F80300"
            />
            <path
                d="M11.4371 6.00041C11.1266 6.00041 10.8746 5.74842 10.8746 5.43793V2.06303C10.8746 1.54628 10.454 1.12551 9.93722 1.12551H1.49998C1.18949 1.12551 0.9375 0.873523 0.9375 0.563032C0.9375 0.25254 1.18949 0.000549316 1.49998 0.000549316H9.93722C11.075 0.000549316 11.9996 0.925295 11.9996 2.06303V5.43793C11.9996 5.74842 11.7476 6.00041 11.4371 6.00041Z"
                fill="#F80300"
            />
            <path
                d="M9.93724 15.7501H6.93724C6.62675 15.7501 6.37476 15.4981 6.37476 15.1876C6.37476 14.8771 6.62675 14.6251 6.93724 14.6251H9.93724C10.454 14.6251 10.8746 14.2043 10.8746 13.6876V10.3127C10.8746 10.0022 11.1266 9.75021 11.4371 9.75021C11.7476 9.75021 11.9996 10.0022 11.9996 10.3127V13.6876C11.9996 14.8253 11.075 15.7501 9.93724 15.7501Z"
                fill="#F80300"
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="18" height="18" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const Loader = () => <div className="spinner" role="status" />;

const Cats = ({
    logoutUser,
    breeds,
    catImages,
    getImages,
    isLoading,
    selectedBreed,
    getBreeds,
    setBreed
}) => {
    useEffect(() => {
        getBreeds();
    }, [getBreeds]);

    const [breedInfo, setBreedInfo] = useState({});
    const handleSelection = ({ target: { value } }) => {
        setBreedInfo({
            name: value.split(",")[0],
            id: value.split(",")[1]
        });
    };

    const handleLogout = () => {
        logoutUser();
    };

    const fetchBreed = () => {
        setBreed(breedInfo);
        getImages({ breed_id: breedInfo.id });
    };
    return (
        <div className="cats-page">
            <nav className="nav">
                <span
                    role="button"
                    data-testid="logout-btn"
                    className="logout-btn"
                    onClick={handleLogout}>
                    Logout
                    <LogoutSvg />
                </span>
            </nav>

            <div className="container">
                <div className="card-cont">
                    <select
                        data-testid="dropdown-test-id"
                        onChange={handleSelection}
                        defaultValue={`${[
                            selectedBreed.name,
                            selectedBreed.id
                        ]}`}>
                        <option defaultValue="default" disabled={breedInfo.id}>
                            Select a breed
                        </option>
                        {breeds.length > 0 ? (
                            <Fragment>
                                {Children.toArray(
                                    breeds.map(({ name, id }) => (
                                        <option
                                            value={[name, id]}
                                            data-testid="breed-type">
                                            {name}
                                        </option>
                                    ))
                                )}
                            </Fragment>
                        ) : null}
                    </select>
                    <button
                        type="button"
                        data-testid="search-btn"
                        className="cstm-btn"
                        onClick={fetchBreed}>
                        <span>Search</span>
                    </button>
                </div>

                <div className="cats-cont">
                    <h3>{selectedBreed.name}</h3>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className="cats-grid" data-testid="cats-grid">
                            {Children.toArray(
                                catImages.map(data => (
                                    <div
                                        className="img-cont"
                                        data-testid="img-cont">
                                        <img src={data.url} alt={data.id} />
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cats, loader }) => {
    return {
        breeds: cats.breeds,
        catImages: cats.catImages,
        selectedBreed: cats.selectedBreed,
        isLoading: loader.isLoading
    };
};

const mapDispatchToProps = {
    setBreed,
    logoutUser,
    getImages,
    getBreeds
};

export default connect(mapStateToProps, mapDispatchToProps)(Cats);
