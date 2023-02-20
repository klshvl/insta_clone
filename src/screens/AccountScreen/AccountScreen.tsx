import React, { useRef, useState } from "react";
import { Image, Platform, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";
import ImagePicker from "react-native-image-crop-picker";
import storage from "@react-native-firebase/storage";

import { styles } from "./styles";
import { AccountMenu, Button, ItemSeparator } from "../../components";

import {
  AccountMenuRefProps,
  MAX_TRANSLATE_Y,
} from "../../components/AccountMenu/AccountMenu";
import { DiscoverPeople } from "../../../assets/icons";
import { Icon } from "react-native-eva-icons";
import { useAppSelector } from "../../hooks";

const AccountScreen = () => {
  const dispatch = useDispatch();

  const ref = useRef<AccountMenuRefProps>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { user } = useAppSelector(state => state.user);

  /////////////// EDITPROFILE ///////////////

  const editProfileHandler = async () => {
    try {
      const { filename, sourceURL } = await ImagePicker.openPicker({
        width: 86,
        height: 86,
      });

      if (sourceURL) {
        const uploadUrl =
          Platform.OS === "ios" ? sourceURL.replace("file://", "") : sourceURL;

        await storage().ref(filename).putFile(uploadUrl);
      }
      const url = await storage().ref(filename).getDownloadURL();
      await auth().currentUser?.updateProfile({ photoURL: url });

      dispatch({ type: "user/profilePic", payload: url });
    } catch (error) {
      console.log(error);
    }
  };

  /////////////// LOGOUT ///////////////

  const logoutHandler = async () => {
    await auth().signOut();
    dispatch({ type: "signOut", payload: auth()?.currentUser });
  };

  /////////////// MODAL ///////////////

  const modalHandler = () => {
    setIsVisible(!isVisible);
    if (isVisible) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(MAX_TRANSLATE_Y);
    }
  };

  return (
    <View style={styles.account}>
      <View style={styles.headerContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{user?.displayName}</Text>
          <Icon name="arrow-ios-downward-outline" width={24} height={24} />
        </View>
        <View style={styles.iconsContainer}>
          <Icon
            name="plus-square-outline"
            width={32}
            height={32}
            style={styles.iconMargin}
          />
          <Icon
            name="menu-outline"
            width={32}
            height={32}
            onPress={modalHandler}
          />
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileImg}>
          <Image
            source={
              user?.photoURL
                ? { uri: user.photoURL }
                : require("../../../assets/images/defaultProfile.svg.png")
            }
            style={styles.profileImg}
          />
          <View style={styles.addStoryCircle}>
            <Icon
              name="plus-outline"
              width={16}
              height={16}
              fill="white"
              stroke="white"
            />
          </View>
        </View>
        <View style={styles.profileInfo}>
          <View style={[styles.infoContainer, styles.infoMargin]}>
            <Text style={styles.infoNumbers}>54</Text>
            <Text style={styles.infoText}>Posts</Text>
          </View>
          <View style={[styles.infoContainer, styles.infoMargin]}>
            <Text style={styles.infoNumbers}>200</Text>
            <Text style={styles.infoText}>Followers</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoNumbers}>200</Text>
            <Text style={styles.infoText}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileBtns}>
        <Button
          style={[styles.btn, styles.btnWidth]}
          textStyle={styles.btnText}
          onPress={editProfileHandler}>
          Edit Profile
        </Button>
        <Button
          style={[styles.btn, styles.btnWidth]}
          textStyle={styles.btnText}>
          Share Profile
        </Button>
        <Button style={[styles.btn, styles.btnPaddingHorizontal]}>
          <DiscoverPeople />
        </Button>
      </View>
      <View style={styles.storyHighLights}>
        <Button textStyle={styles.storyHighLightsBtn}>Story highlights</Button>
        <Icon name="chevron-down-outline" width={18} height={18} />
      </View>
      <ItemSeparator />
      <Button onPress={logoutHandler}>Log out</Button>
      <AccountMenu isVisible={isVisible} ref={ref} onPress={modalHandler} />
    </View>
  );
};

export default AccountScreen;
