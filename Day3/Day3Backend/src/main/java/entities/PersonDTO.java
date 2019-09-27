/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

/**
 *
 * @author sinanjasar
 */
public class PersonDTO {
    private Long id;
    private String name;

    public PersonDTO(Person p) {
        this.name = p.getName();
        this.id = p.getId();
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
}
