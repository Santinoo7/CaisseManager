package tech.CaisseManager.Model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Caisses implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id ;

    private String name ;
    private String sold ;

    public Caisses() {
    }

    public Caisses(long id, String name, String sold) {
        this.id = id;
        this.name = name;
        this.sold = sold;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSold() {
        return sold;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSold(String sold) {
        this.sold = sold;
    }


}
