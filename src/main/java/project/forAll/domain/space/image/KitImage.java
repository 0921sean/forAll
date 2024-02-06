package project.forAll.domain.space.image;

import lombok.Getter;
import lombok.Setter;
import project.forAll.domain.BassDomain;
import project.forAll.domain.Image;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class KitImage extends BassDomain {

    @Id @GeneratedValue
    @Column(name = "kitImage_id")
    private Long id;

    // 주방 우측면
    private String kitRight;
    // 주방 좌측면
    private String kitLeft;
    // 주방 정면
    private String kitFront;
    // 주방 후면
    private String kitBack;
    // 주방 전체샷
    private String kitEntire;
    // 주방 추가사진
    @ElementCollection
    private List<String> kitExtra = new ArrayList<>();

//    public addImage(Image image) {
//        this.kitExtra.add(image);
//        image.set(this);
//    }
}
