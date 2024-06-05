import React, { Component } from "react";
import "./MyPage.css";
import profileImage from "../../assets/profileImage.jpg";
import lvSilver from "../../assets/silver.png";
import lvGold from "../../assets/gold.png";
import DeleteID from "../../components/DeleteID/DeleteID";
import DeleteConfirm from "../../components/DeleteConfirm/DeleteConfirm";
import EditProfile from "../../components/EditProfile/EditProfile";
import { Navbar } from "../../components/Navbar/Navbar";
import {Link} from 'react-router-dom';

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteIDModal: false,
            showDeleteConfirmModal: false,
            showEditProfileModal: false
        };
    }

    handleDeleteClick = () => {
        this.setState({ showDeleteIDModal: true });
    };

    handleCloseDeleteIDModal = () => {
        this.setState({ showDeleteIDModal: false });
    };

    handleConfirmDelete = () => {
        this.setState({ showDeleteIDModal: false, showDeleteConfirmModal: true });
    };

    handleCloseDeleteConfirmModal = () => {
        this.setState({ showDeleteConfirmModal: false });
    };

    handleEditClick = () => {
        this.setState({ showEditProfileModal: true });
    };

    handleCloseEditProfileModal = () => {
        this.setState({ showEditProfileModal: false });
    };


    render() {
        const userName = "노성균"; 
        let userPoint = 23;
        let levelImage;
        const studyTitle1 = "면접 스터디(그룹장)";
        const studyTitle2 = "모각코 스터디(멤버)";
        const place = "서울";
        const day = "월,화";
        const type = "기타";

        if (userPoint >= 10 && userPoint < 20) {
            levelImage = lvSilver;
        } else if (userPoint >= 20 && userPoint < 30) {
            levelImage = lvGold;
        }

        return (
            <div>
                <Navbar />
                <p className="title">마이페이지</p>
                <button className="deleteID" onClick={this.handleDeleteClick}>회원탈퇴</button>
                <div className="outline"></div>
                <div className="circle-container">
                    <img className="profile-image" src={profileImage} alt="Profile" />
                </div>
                <div className="profile">
                  <p className="user-ID">{userName} 님</p>
                  <div className="user-point">나의 포인트: {userPoint} P</div>
                  <p className="user-tag">나의 태그: </p>
                  <div className="level-image">
                     <img src={levelImage} alt="Level" />
                  </div>
                  <button className="edit-profile-button" onClick={this.handleEditClick}>프로필 수정하기</button>
                </div>
                <p className="study-list">참여 중인 스터디</p>
                <div className="inline"></div>

                <DeleteID
                    show={this.state.showDeleteIDModal} 
                    handleClose={this.handleCloseDeleteIDModal} 
                    handleConfirm={this.handleConfirmDelete} 
                />

                <DeleteConfirm
                    show={this.state.showDeleteConfirmModal} 
                    handleClose={this.handleCloseDeleteConfirmModal} 
                />

                <EditProfile 
                    show={this.state.showEditProfileModal}
                    handleClose={this.handleCloseEditProfileModal}
                />

                
                <div className="myStudy">
                 <p className="studyTitle">{studyTitle1}</p>
                 <Link to="/studyGroup">
                     <button className="studyList-button">바로가기</button>
                 </Link>
                </div>

                

                <div className="myStudy">
                  <p className="studyTitle">{studyTitle2}</p>
                  <button className="studyList-button" onClick={this.handleDeleteClick}>평가하기</button>
                </div>
            </div>
        );
    }
}

export default MyPage;
