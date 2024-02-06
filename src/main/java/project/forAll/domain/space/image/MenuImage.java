package project.forAll.domain.space.image;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class MenuImage extends BassDomain {

    @Id @GeneratedValue
    @Column(name = "menuImage_id")
    private Long id;

    // 메뉴사진 1
    private String menu1;
    // 메뉴사진 2
    private String menu2;
    // 메뉴사진 3
    private String menu3;
    // 메뉴사진 4
    private String menu4;
    // 메뉴 추가사진
    @ElementCollection
    private List<String> menuExtra;

//    public addImage(Image image) {
//        this.menuExtra.add(image);
//        image.set(this);
//    }
}
