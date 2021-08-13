import cv2
import os

def saveOnlyLung(data_path,save_to_path,size_output):
    for class_path in os.listdir(data_path):
        imgs_path=os.listdir(data_path+"/"+class_path)

        for index,img_path in enumerate(imgs_path):
            new_file_name=save_to_path+"/"+class_path+"/"+str(index)+".png"

            img_full_path=data_path+"/"+class_path+"/"+img_path
            img=cv2.imread(img_full_path, cv2.IMREAD_UNCHANGED)
            img_resized=cv2.resize(img,size_output,interpolation = cv2.INTER_AREA)
            cv2.imwrite(new_file_name, img_resized)

saveOnlyLung("./projects","./new_projects",size_output=(1350,770))


