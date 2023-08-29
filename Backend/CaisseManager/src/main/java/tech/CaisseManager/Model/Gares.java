package tech.CaisseManager.Model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Gares implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id ;
    private String name ;

    private String tel;
    public void setTel(String tel) {
        this.tel = tel;
    }
    public String getTel() {
        return tel;
    }

    public Gares() {
    }

    public Gares(Long id, String name, String tel) {
        this.id = id;
        this.name = name;
        this.tel = tel;
    }
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
